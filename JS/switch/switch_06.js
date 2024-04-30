switch (true) {
    case "fetch" in globalThis:
      // Fetch a resource with fetch
      break;
    case "XMLHttpRequest" in globalThis:
      // Fetch a resource with XMLHttpRequest
      break;
    default:
      // Fetch a resource with some custom AJAX logic
      break;
  }
  