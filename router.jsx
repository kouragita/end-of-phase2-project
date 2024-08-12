createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      loader: rootLoader,
      children: [
        {
          path: "events/:id",
          element: <Event />,
          loader: eventLoader,
        },
      ],
    },
  ]);