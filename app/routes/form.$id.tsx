import { LoaderFunction, LoaderFunctionArgs, json } from '@remix-run/node';

export const loader: LoaderFunction = async ({ params }) => {
  // Fetch and return the layout and structure of the form
  const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/${params.id}`);
  const data = await res.json();
  return json(data);
};

export const action = async () => {
  // This is where we submit the information about the form to the API
};

export default function Form() {
  return <div>Form</div>;
}
