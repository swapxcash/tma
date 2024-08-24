import ReactDOM from "react-dom/client";

import "@telegram-apps/telegram-ui/dist/styles.css";
import "./index.css";
import { Root } from "@/components/Root.tsx";
import "./i18n.ts"; // import i18n configuration

ReactDOM.createRoot(document.getElementById("root")!).render(<Root />);
