export const useUrlParams = () => {
  const searchParams = {
    page: Number(new URLSearchParams(window.location.search).get("page")) || 1,
    query: new URLSearchParams(window.location.search).get("query") || "",
  };

  const updateUrl = (page: number, query: string) => {
    const params = new URLSearchParams();
    if (page !== 1) params.set("page", page.toString());
    if (query) params.set("query", query);

    const pathname = window.location.pathname.replace(/\/$/, "");

    const newUrl = `${pathname}${
      params.toString() ? `?${params.toString()}` : ""
    }`;
    window.history.pushState({}, "", newUrl);
  };

  return { searchParams, updateUrl };
};
