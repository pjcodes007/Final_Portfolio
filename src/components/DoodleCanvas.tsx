import { useRef, useEffect } from "react";

interface DoodleCanvasProps {
  onDraw?: (imageDataUrl: string) => void;
}

const DoodleCanvas: React.FC<DoodleCanvasProps> = ({ onDraw }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDrawingRef = useRef(false);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      const context = canvas.getContext("2d");
      if (context) {
        context.lineWidth = 2;
        context.lineCap = "round";
        context.strokeStyle = "#000";
        ctxRef.current = context;
      }
    }
  }, []);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    isDrawingRef.current = true;
    ctxRef.current?.beginPath();
    ctxRef.current?.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current || !ctxRef.current) return;
    ctxRef.current.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctxRef.current.stroke();
  };

  const stopDrawing = () => {
    if (!ctxRef.current || !canvasRef.current) return;
    isDrawingRef.current = false;
    ctxRef.current.closePath();
    if (onDraw) {
      const dataUrl = canvasRef.current.toDataURL();
      onDraw(dataUrl);
    }
  };

  const clearCanvas = () => {
    if (!ctxRef.current || !canvasRef.current) return;
    ctxRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  };

  return (
    <div className="relative border border-gray-300 rounded overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-48 bg-white cursor-crosshair"
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
      />
      <button
        onClick={clearCanvas}
        className="absolute top-2 right-2 bg-white px-2 py-1 text-sm border rounded hover:bg-gray-100"
      >
        Clear
      </button>
    </div>
  );
};

export default DoodleCanvas;
