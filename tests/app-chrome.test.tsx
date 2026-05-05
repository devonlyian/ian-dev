import { render, screen } from "@testing-library/react";
import { beforeAll, describe, expect, it, vi } from "vitest";
import { AppChrome } from "@/components/layout/AppChrome";

const pathname = vi.hoisted(() => ({
  value: "/",
}));

vi.mock("next/navigation", () => ({
  usePathname: () => pathname.value,
}));

vi.mock("@/components/layout/Preloader", () => ({
  Preloader: () => null,
}));

vi.mock("@/components/layout/SiteHeader", () => ({
  SiteHeader: () => null,
}));

vi.mock("@/components/layout/SmoothCursor", () => ({
  SmoothCursor: () => null,
}));

vi.mock("@/components/layout/SmoothScroll", () => ({
  SmoothScroll: () => null,
}));

vi.mock("sonner", () => ({
  Toaster: () => null,
}));

describe("AppChrome", () => {
  beforeAll(() => {
    class MockIntersectionObserver {
      observe = vi.fn();
      disconnect = vi.fn();
    }

    vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);
  });

  it("shows section navigation only on the one-page home route", () => {
    pathname.value = "/";

    const { rerender } = render(
      <AppChrome>
        <main>home</main>
      </AppChrome>,
    );

    expect(screen.getByRole("navigation", { name: "Section navigation" })).toBeTruthy();

    pathname.value = "/projects";
    rerender(
      <AppChrome>
        <main>archive</main>
      </AppChrome>,
    );

    expect(screen.queryByRole("navigation", { name: "Section navigation" })).toBeNull();
  });
});
