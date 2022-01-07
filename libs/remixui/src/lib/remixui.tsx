import './remixui.module.css';
import { Link } from 'remix';

/* eslint-disable-next-line */
export interface RemixuiProps {}

export function Remixui(props: RemixuiProps) {
  return (
    <div>
      <h1>Welcome to Remixui!</h1>
      <hr />
      <Link to="/">Home</Link>
    </div>
  );
}

// export default Remixui;
