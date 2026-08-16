import {
  DEFAULT_BRAND_NAME,
  useBranding,
} from "@/client/contexts/BrandingContext";

// The auth-page footer: "© {year} {brandName}". The brand name follows the global white-label
// config. The default brand links to the project's public repository; a custom brand renders as
// plain text.
export function BrandFooter() {
  const { brandName } = useBranding();
  const year = new Date().getFullYear();
  const isDefault = brandName === DEFAULT_BRAND_NAME;
  return (
    <footer className="mt-12 text-center">
      <p className="text-text-muted text-xs">
        {"© "}
        {year}{" "}
        {isDefault ? (
          <a
            href="https://github.com/marcoasp3030/agenteIA"
            className="text-text-secondary hover:text-text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {brandName}
          </a>
        ) : (
          <span className="text-text-secondary">{brandName}</span>
        )}
      </p>
    </footer>
  );
}
