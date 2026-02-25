import { useState, useRef, useCallback } from "react";
import { Camera, X, CheckCircle, AlertCircle, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CapturedPhoto {
  id: string;
  dataUrl: string;
  timestamp: Date;
  location?: {
    latitude: number;
    longitude: number;
  };
}

interface SelfieCaptureProps {
  maxPhotos?: number;
  onPhotosChange?: (photos: CapturedPhoto[]) => void;
  employeeId?: string;
}

export function SelfieCapture({ 
  maxPhotos = 3, 
  onPhotosChange,
  employeeId = "EMP001"
}: SelfieCaptureProps) {
  const [photos, setPhotos] = useState<CapturedPhoto[]>([]);
  const [isCapturing, setIsCapturing] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const startCamera = useCallback(async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user", width: 640, height: 480 }
      });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
      setIsCapturing(true);
    } catch (error) {
      console.error("Camera access denied:", error);
    }
  }, []);

  const stopCamera = useCallback(() => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
    setIsCapturing(false);
  }, [stream]);

  const capturePhoto = useCallback(async () => {
    if (!videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    ctx.drawImage(video, 0, 0);
    const dataUrl = canvas.toDataURL("image/jpeg", 0.8);

    // Get current location
    let location: { latitude: number; longitude: number } | undefined;
    try {
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, { timeout: 5000 });
      });
      location = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
    } catch {
      // Location unavailable
    }

    const newPhoto: CapturedPhoto = {
      id: Date.now().toString(),
      dataUrl,
      timestamp: new Date(),
      location,
    };

    const updatedPhotos = [...photos, newPhoto];
    setPhotos(updatedPhotos);
    onPhotosChange?.(updatedPhotos);

    if (updatedPhotos.length >= maxPhotos) {
      stopCamera();
    }
  }, [photos, maxPhotos, onPhotosChange, stopCamera]);

  const removePhoto = (id: string) => {
    const updatedPhotos = photos.filter(p => p.id !== id);
    setPhotos(updatedPhotos);
    onPhotosChange?.(updatedPhotos);
  };

  return (
    <div className="bg-card rounded-2xl border border-border overflow-hidden">
      <div className="p-4 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-gradient-hero">
            <Camera className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold">Selfie Verification</h3>
            <p className="text-xs text-muted-foreground">
              {photos.length}/{maxPhotos} photos captured
            </p>
          </div>
        </div>
        {photos.length < maxPhotos && !isCapturing && (
          <Button variant="default" size="sm" onClick={startCamera}>
            <Camera className="w-4 h-4 mr-2" />
            Open Camera
          </Button>
        )}
      </div>

      <div className="p-4 space-y-4">
        {/* Camera view */}
        {isCapturing && (
          <div className="relative rounded-xl overflow-hidden bg-foreground">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="w-full aspect-video object-cover"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
              <Button
                variant="destructive"
                size="sm"
                onClick={stopCamera}
              >
                <X className="w-4 h-4 mr-2" />
                Cancel
              </Button>
              <Button
                variant="default"
                size="lg"
                onClick={capturePhoto}
                className="bg-white text-foreground hover:bg-white/90"
              >
                <Camera className="w-5 h-5 mr-2" />
                Capture
              </Button>
            </div>
            <div className="absolute top-3 left-3 px-2 py-1 rounded bg-destructive text-white text-xs font-medium">
              LIVE • Camera Only
            </div>
          </div>
        )}

        <canvas ref={canvasRef} className="hidden" />

        {/* Important notice */}
        <div className="flex items-start gap-3 p-3 rounded-xl bg-amber-50 text-amber-700 border border-amber-200">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-medium">Camera Only Policy</p>
            <p className="text-amber-600">Gallery uploads are disabled. All photos must be captured live via camera.</p>
          </div>
        </div>

        {/* Captured photos grid */}
        {photos.length > 0 && (
          <div className="space-y-3">
            <p className="text-sm font-medium">Captured Photos</p>
            <div className="grid grid-cols-3 gap-3">
              {photos.map((photo) => (
                <div key={photo.id} className="relative group">
                  <img
                    src={photo.dataUrl}
                    alt="Captured selfie"
                    className="w-full aspect-square object-cover rounded-xl border border-border"
                  />
                  <button
                    onClick={() => removePhoto(photo.id)}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-destructive text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <div className="absolute bottom-1 left-1 right-1 px-1.5 py-0.5 rounded bg-foreground/80 text-white text-[10px] truncate">
                    {photo.timestamp.toLocaleTimeString()} • 
                    {photo.location ? ` GPS ✓` : ` No GPS`}
                  </div>
                </div>
              ))}

              {/* Empty slots */}
              {Array.from({ length: maxPhotos - photos.length }).map((_, i) => (
                <div
                  key={`empty-${i}`}
                  className="aspect-square rounded-xl border-2 border-dashed border-border flex items-center justify-center text-muted-foreground"
                >
                  <ImageIcon className="w-8 h-8" />
                </div>
              ))}
            </div>
          </div>
        )}

        {photos.length === maxPhotos && (
          <div className="flex items-center gap-2 p-3 rounded-xl bg-green-50 text-green-700 border border-green-200">
            <CheckCircle className="w-5 h-5" />
            <span className="text-sm font-medium">All {maxPhotos} photos captured successfully</span>
          </div>
        )}
      </div>
    </div>
  );
}
