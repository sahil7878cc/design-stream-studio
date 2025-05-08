
import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { 
  Play, Pause, Upload, Download, Share, Layout, 
  LayoutGrid, Link, Edit, Crop, Image 
} from "lucide-react";
import { cn } from '@/lib/utils';
import { toast } from "sonner";

interface VideoEditorProps {
  videoSrc: string;
}

const VideoEditor: React.FC<VideoEditorProps> = ({ videoSrc }) => {
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [saturation, setSaturation] = useState(100);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFilterChange = (type: 'brightness' | 'contrast' | 'saturation', value: number[]) => {
    switch (type) {
      case 'brightness':
        setBrightness(value[0]);
        break;
      case 'contrast':
        setContrast(value[0]);
        break;
      case 'saturation':
        setSaturation(value[0]);
        break;
    }
  };

  const handleExport = () => {
    setIsProcessing(true);
    
    // Simulate export process
    setTimeout(() => {
      setIsProcessing(false);
      toast.success('Video successfully exported!');
    }, 2000);
  };

  const handleShare = () => {
    toast.success('Share link copied to clipboard!');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Video Preview */}
      <div className="lg:col-span-2">
        <div className="bg-card rounded-lg p-4 shadow-sm">
          <h2 className="font-display text-lg mb-4">Preview</h2>
          <VideoPlayer 
            src={videoSrc} 
            className="aspect-video"
          />
        </div>
      </div>
      
      {/* Controls */}
      <div className="lg:col-span-1">
        <div className="bg-card rounded-lg p-4 shadow-sm h-full">
          <h2 className="font-display text-lg mb-4">Edit Video</h2>
          
          <Tabs defaultValue="filters" className="w-full">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="filters">Filters</TabsTrigger>
              <TabsTrigger value="effects">Effects</TabsTrigger>
              <TabsTrigger value="text">Text</TabsTrigger>
            </TabsList>
            
            <TabsContent value="filters" className="space-y-6">
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium">Brightness</label>
                    <span className="text-xs text-muted-foreground">{brightness}%</span>
                  </div>
                  <Slider
                    value={[brightness]}
                    min={0}
                    max={200}
                    step={1}
                    onValueChange={(value) => handleFilterChange('brightness', value)}
                  />
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium">Contrast</label>
                    <span className="text-xs text-muted-foreground">{contrast}%</span>
                  </div>
                  <Slider
                    value={[contrast]}
                    min={0}
                    max={200}
                    step={1}
                    onValueChange={(value) => handleFilterChange('contrast', value)}
                  />
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium">Saturation</label>
                    <span className="text-xs text-muted-foreground">{saturation}%</span>
                  </div>
                  <Slider
                    value={[saturation]}
                    min={0}
                    max={200}
                    step={1}
                    onValueChange={(value) => handleFilterChange('saturation', value)}
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="effects" className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="flex flex-col h-auto py-4 gap-2">
                  <Crop className="h-5 w-5" />
                  <span className="text-xs">Crop</span>
                </Button>
                <Button variant="outline" className="flex flex-col h-auto py-4 gap-2">
                  <Link className="h-5 w-5" />
                  <span className="text-xs">Transitions</span>
                </Button>
                <Button variant="outline" className="flex flex-col h-auto py-4 gap-2">
                  <Edit className="h-5 w-5" />
                  <span className="text-xs">Trim</span>
                </Button>
                <Button variant="outline" className="flex flex-col h-auto py-4 gap-2">
                  <Image className="h-5 w-5" />
                  <span className="text-xs">Filters</span>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground text-center mt-4">
                Select an effect to apply to your video
              </p>
            </TabsContent>
            
            <TabsContent value="text" className="space-y-4">
              <p className="text-sm text-muted-foreground mb-3">
                Add text overlays to your video
              </p>
              <Button variant="secondary" className="w-full">
                Add Text Layer
              </Button>
              <div className="border rounded-md p-3 mt-4">
                <p className="text-xs text-muted-foreground">
                  No text layers added yet
                </p>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-8 space-y-4">
            <div className="flex items-center justify-between gap-3">
              <Button 
                variant="outline" 
                className="flex items-center gap-2 flex-1"
                onClick={() => toast.info('Uploading new video...')}
              >
                <Upload className="h-4 w-4" />
                Upload
              </Button>
              <Button 
                variant="outline" 
                className="flex items-center gap-2 flex-1"
                onClick={handleExport}
                disabled={isProcessing}
              >
                <Download className="h-4 w-4" />
                {isProcessing ? 'Exporting...' : 'Export'}
              </Button>
            </div>
            
            <Button 
              className="w-full flex items-center gap-2"
              onClick={handleShare}
            >
              <Share className="h-4 w-4" />
              Share Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoEditor;
