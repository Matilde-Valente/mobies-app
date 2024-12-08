import { useNavigate, useRouteError } from 'react-router';

export default function Error() {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>
          {/* @ts-expect-error Error has type unknown */}
          {error.statusText || error.message}
        </i>
      </p>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
}
