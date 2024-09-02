import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/95344484-82f0-4539-92ce-ffff84ba40c4-edfqla.jpg",
  "https://utfs.io/f/d14947d0-2f70-40e6-b651-b6c8f5326363-edfql9.jpg",
  "https://utfs.io/f/41a12d4e-0d20-41f4-adce-753be3b926e8-edfql8.jpg",
  "https://utfs.io/f/aa025b88-76c8-47fa-bb7b-710de6716a7a-edfql7.jpg",
];

const mockImages = mockUrls.map((url, index) => {
  return {
    id: index + 1,
    url,
  };
});

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
      Hello (gallery in progress)
    </main>
  );
}
