import classNames from "classnames";

type AlertType = "danger" | "warn" | "info";

function getClasses(type: AlertType) {
  return classNames("alert block p-4 rounded-lg m-0 border-2", {
    "bg-red-100 text-red-500 border-red-500": type === "danger",
    "bg-yellow-100 text-yellow-500 border-yellow-500": type === "warn",
    "bg-blue-100 text-blue-500 border-blue-500": type === "info",
  });
}

interface AlertProps {
  type: AlertType;
  children: React.ReactNode;
}

export default function Alert({ type, children }: AlertProps) {
  return <aside className={getClasses(type)}>{children}</aside>;
}
