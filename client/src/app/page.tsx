import YesNoGame from './components/YesNoGame';

export default function Home() {
  // You can replace these with your actual image and audio files
  const imageSrc = "/iamge.jpg"; // Your actual image
  const imageAlt = "Valentine's Day Image";
  
  // Your actual audio files
  const audioFiles = [
    "/ayawba.m4a",
    "/malooyka.m4a", 
    "/pleasepleaseplease.m4a",
    "/sigenaoh.m4a",
    "/sigenapleasee.m4a",
    "/uno.m4a"
  ];

  return (
    <YesNoGame 
      imageSrc={imageSrc}
      imageAlt={imageAlt}
      audioFiles={audioFiles}
    />
  );
}
