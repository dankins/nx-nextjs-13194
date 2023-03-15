import {
  ServerComponent,
  ServerComponentWithClient,
} from "@nx-nextjs-13194/shared-lib";
import { ServerComponentInternal } from "../components/ServerComponentInternal";
import { LocalComponent } from "../components/LocalComponent";
// import { LocalComponent } from "../components/LocalComponent";
import { ReExportedComponent } from "../components/ReExportedComponent";
// import { ClientComponent } from '@nx-nextjs-13194/client-components';

export default function Page() {
  return (
    <div>
      <div>
        <h2>️✔ Server component from this app:</h2>
        <ServerComponentInternal message={"Hello, Mars"} />
      </div>
      <div>
        <h2>✔ServerComponent from a shared lib:</h2>
        <ServerComponent message={"Hello, Earth"} />
      </div>
      <div>
        <h2>✔ Client component from this app:</h2>
        <LocalComponent />
      </div>
      <div>
        <h2>✔ Client component from shared library re-exported</h2>
        <ReExportedComponent />
      </div>
      <div>
        <h2>
          ✔ Server component in shared library that includes a client component{" "}
        </h2>
        <ServerComponentWithClient />
      </div>
    </div>
  );
}
