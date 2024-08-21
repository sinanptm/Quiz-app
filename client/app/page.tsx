import QuestionsTable from "@/components/QuestionsTable";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen  text-white py-4">
      <header>
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center">Quiz Center</h2>
        </div>
      </header>

      <main className="flex-grow container mx-auto p-5">
        <div className="flex justify-center">
          <p className="text-lg md:text-2xl text-center text-gray-400 mt-4 mb-10">
            Choose a quiz to test your knowledge and skills!
          </p>
        </div>
        <QuestionsTable />
      </main>

      <footer className="bg-gray-800 py-4 mt-10">
        <div className="container mx-auto text-center">
          <p className="text-gray-500">© 2024 Quiz Center. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
