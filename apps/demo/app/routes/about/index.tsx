// fails with this
import { Remixui } from '@remixnxtest5/remixui';

// works with this import
// import { Remixui } from '../../libs/remixui';

export default function Index() {
  return (
    <div>
      <h1>Import test</h1>
      <Remixui />
    </div>
  );
}
