"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function PomodoroTimer() {
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive && time > 0) {
      interval = setInterval(() => setTime((t) => t - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return (
    <div className="text-center">
      <div className="text-5xl font-mono mb-4">
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </div>
      <div className="flex gap-2 justify-center">
        <Button onClick={() => setIsActive(!isActive)}>{isActive ? "Pause" : "Start"}</Button>
        <Button variant="secondary" onClick={() => { setTime(25 * 60); setIsActive(false); }}>
          Reset
        </Button>
      </div>
    </div>
  );
}
