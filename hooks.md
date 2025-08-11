| Hook        | Main Purpose | Common Use Cases | Example in a Project |
|-------------|-------------|------------------|----------------------|
| `useState`  | Store and update state in a component | Managing form inputs, toggles, counters, dynamic UI changes | Show/hide a modal, track current page in a slideshow |
| `useRef`    | Hold a mutable value that doesn’t trigger re-render on change | Accessing DOM elements, storing timers/interval IDs, keeping previous state values, controlling animations/scroll | Smooth scroll to a section, play/pause a video, focus an input field, animate a canvas |
| `useContext`| Share state/data between components without prop drilling | Theme switching, user authentication data, global settings | Store theme preference for entire site, share language setting across pages |
| `useEffect` | Run side effects in components | Fetching data, subscribing to events, updating DOM manually, cleaning up resources | Fetch API data on mount, listen for window resize, set a timeout to trigger an animation |

