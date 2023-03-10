import { ServerComponent } from "@nx-nextjs-13194/shared-lib";
import { ServerComponentInternal } from "../components/ServerComponentInternal";
// import { ServerComponentWithClient } from "../components/ServerComponentWithClient";
// import { LocalComponent } from "../components/LocalComponent";
// import { ReExportedComponent } from "../components/ReExportedComponent";
// import { ClientComponent } from '@nx-nextjs-13194/client-components';

export default function Page() {
  return (
    <div>
      <div>
        <h2>Server component from this app:</h2>
        <p>✔️ This works fine</p>
        <ServerComponentInternal message={"Hello, Mars"} />
      </div>
      <div>
        <h2>ServerComponent from a shared lib:</h2>
        <p>✔️ This also works fine</p>
        <ServerComponent message={"Hello, Earth"} />
      </div>
      <div>
        <h2>🤷 Client component from this app:</h2>
        <p>
          I would have expected this to work, but it blows up saying I need to
          mark with &quot;use client&quot;. This works in my actual app but for
          some reason is behaving differently here.
        </p>
        {/*<LocalComponent />*/}
      </div>
      <div>
        <h2>🤷 Client component from shared library re-exported</h2>
        <p>
          This is a workaround some of the folks here have used with success,
          but again is not working here. You create a file with &quot;use
          client&quot; at the top in your app that re-exports the client
          components you want to use.
        </p>
        {/*<ReExportedComponent />*/}
      </div>
      <div>
        <h2>
          ❌ Server component in shared library that includes a client component{" "}
        </h2>
        <p>
          I should be able to load a server component from a shared library, and
          that component includes a Client component marked with `use client` in
          that shared library. I could not get this to work in my actual app,
          nor in this minimal environment.
        </p>
        {/*<ServerComponentWithClient />*/}
      </div>
    </div>
  );
}
