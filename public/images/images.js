import Image from 'next/image';
 
export default function Home1() {
  return (
    <Image
      src="/home1.jpg"
      width={500}
      height={500}
      alt="Picture of the author"
    />
  );
}