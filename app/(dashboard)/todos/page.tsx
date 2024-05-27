import NewTodoForm from '@/components/NewTodoForm';

export default function Page() {
  return (
    <div>
      <NewTodoForm onChange={() => console.log('hello')} />
    </div>
  );
}
