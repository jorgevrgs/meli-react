import styles from "./Breadcrumb.module.scss";

interface BreadcrumbProps {
  pathToRoot: string[];
}

export default function Breadcrumb({ pathToRoot }: BreadcrumbProps) {
  return (
    <nav className={styles.breadcrumb} role="navigation">
      <ol className={styles.breadcrumb__items}>
        {pathToRoot.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ol>
    </nav>
  );
}
