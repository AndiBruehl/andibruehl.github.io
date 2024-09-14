import React, { useState, useEffect, useRef } from "react";
import classes from "./Pong.module.css";

const PongModal = ({ onClose }) => {
  const [player1, setPlayer1] = useState(80);
  const [player2, setPlayer2] = useState(80);
  const [ball, setBall] = useState({ x: 360, y: 240, speedX: 3, speedY: 0 });
  const [player1Points, setPlayer1Points] = useState(0);
  const [player2Points, setPlayer2Points] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const canvasRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.keyCode === 38) {
        setPlayer2((prev) => Math.max(prev - 5, 0));
      } else if (e.keyCode === 40) {
        setPlayer2((prev) => Math.min(prev + 5, 400));
      } else if (e.keyCode === 87) {
        setPlayer1((prev) => Math.max(prev - 5, 0));
      } else if (e.keyCode === 83) {
        setPlayer1((prev) => Math.min(prev + 5, 400));
      }
    };

    const handleMouseMove = () => {
      document.body.classList.remove("hidden-cursor");
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (gameStarted) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      const draw = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = "black";
        context.fillRect(0, 0, 720, 480);
        context.fillStyle = "blue";
        context.fillRect(10, player1, 10, 80);
        context.fillStyle = "red";
        context.fillRect(700, player2, 10, 80);
        context.fillStyle = "white";
        context.beginPath();
        context.arc(ball.x, ball.y, 5, 0, Math.PI * 2, true);
        context.fill();

        context.font = "20px Arial";
        context.fillText(`Spieler 1: ${player1Points}`, 20, 20);
        context.fillText(`Spieler 2: ${player2Points}`, 580, 20);

        requestAnimationFrame(draw);
      };

      const loop = () => {
        if (!gameStarted) return;

        if (ball.x < 20) {
          if (ball.y > player1 && ball.y < player1 + 80 && ball.speedX < 0) {
            ball.speedX = -ball.speedX;
            ball.speedY = (ball.y - player1 - 40) * 0.1;
          } else if (ball.x < 0) {
            setPlayer2Points((prev) => prev + 1);
            resetBall();
          }
        }

        if (ball.x > 690) {
          if (ball.y > player2 && ball.y < player2 + 80 && ball.speedX > 0) {
            ball.speedX = -ball.speedX;
            ball.speedY = (ball.y - player2 - 40) * 0.1;
          } else if (ball.x > 720) {
            setPlayer1Points((prev) => prev + 1);
            resetBall();
          }
        }

        if (ball.y < 0 || ball.y > 480) {
          ball.speedY = -ball.speedY;
        }

        if (player1Points === 5 || player2Points === 5) {
          setGameStarted(false);
          const winnerMessage = document.getElementById("winnerMessage");
          winnerMessage.innerText = `Spieler ${
            player1Points === 5 ? 1 : 2
          } gewinnt!`;
          const modal = document.getElementById("modal");
          modal.classList.remove("hidden");
        }

        setBall((prevBall) => ({
          ...prevBall,
          x: prevBall.x + prevBall.speedX,
          y: prevBall.y + prevBall.speedY,
        }));
      };

      draw();
      intervalRef.current = setInterval(loop, 1000 / 60);

      return () => {
        clearInterval(intervalRef.current);
      };
    }
  }, [gameStarted, player1, player2, ball, player1Points, player2Points]);

  const startGame = () => {
    setGameStarted(true);
    document.body.classList.add("hidden-cursor");
  };

  const resetBall = () => {
    setBall({ x: 360, y: 240, speedX: 3, speedY: 0 });
  };

  const resetGame = () => {
    setPlayer1Points(0);
    setPlayer2Points(0);
    setPlayer1(80);
    setPlayer2(80);
    resetBall();
    setGameStarted(true);
  };

  return (
    <div className={classes.ModalOverlay} onClick={onClose}>
      <div
        className={classes.ModalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <span className={classes.CloseButton} onClick={onClose}>
          &times;
        </span>
        <canvas id="canvas" ref={canvasRef} width="720" height="480"></canvas>
        <div className="instructions">
          <h4>Spieler 1 (Blau): W (hoch), S (runter)</h4>
          <h4>Spieler 2 (Rot): Pfeil hoch (hoch), Pfeil runter (runter)</h4>
          <h5>Wer zuerst 5 hat, gewinnt!</h5>
          <h4 style={{ color: "red" }}>
            ACHTUNG! Ball wird nach jeder Runde schneller!! ;)
          </h4>
          <h3>
            &copy; <span id="currentYear">{new Date().getFullYear()}</span> A.
            Brühl - All rights reserved
          </h3>
        </div>
        <div id="modal" className={`modal ${!gameStarted ? "" : "hidden"}`}>
          <div className={classes.ModalContent}>
            <p id="winnerMessage"></p>
            <button id="restartButton" onClick={resetGame}>
              Spiel Neustarten
            </button>
          </div>
        </div>
        {!gameStarted && (
          <button id="startButton" onClick={startGame}>
            Spiel Starten
          </button>
        )}
      </div>
    </div>
  );
};

export default PongModal;
