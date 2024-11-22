import StudentList from "../components/StudentList";

export default function StudentListPage() {
  return (
    <div className="flex flex-col items-center justify-center p-8 ">
      <main className="flex flex-col items-center justify-center p-8 ">
      <StudentList />
      </main>
    </div>
  );
}