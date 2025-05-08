
import React from 'react';
import Layout from '@/components/Layout';
import VideoEditor from '@/components/VideoEditor';

const EditorPage = () => {
  return (
    <Layout>
      <div className="container-custom py-12">
        <h1 className="text-3xl font-bold mb-8">Video Editor</h1>
        <VideoEditor videoSrc="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" />
      </div>
    </Layout>
  );
};

export default EditorPage;
