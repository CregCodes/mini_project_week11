# Mini-Space App

Mini-space is a small react project emulating the classic computer terminals from the Fallout game series.

**Justifications**

This project is intended to practice both states and props in components, and also to continue a previous hackathon task where we didn't have time to implement the CSS style used in this project for that mini-game.

Current Challenges:

- unable to use images or icons with current CSS styles which override rendering of images on page.

- using CSS style to create a similar hover over effect and link to function to trigger render of "log entries"

## Authors

- [@Craig]
- https://www.github.com/CregCodes

## Documentation

- Intiialised and created static React project
- Researched and implemented CSS styling for current page:

  - Researched using dynamic effects for animations.
  - researched creating a "retro" terminal effect for React App
  - Designed a basic function for state & props to practice rendering "log entries"

- Started writing "log entries" for "RandomBlog" component.

- Researched using and implementing "transition effects" using ReactTransitionLibrary to complement CSS style when triggering a setState render event.

**To run this application:**

cd into project folder:

```bash
cd mini-app
```

Ensure you have installed local dependencies:

```bash
npm i
```

Then start react application:

```bash
npm start
```

## Features

**Link reference**

Link when hovered over will change colour.
Link takes user to a gif image address as a placeholder test.

Currently a static page.

## Color Reference

| Color         | Hex                                            |
| ------------- | ---------------------------------------------- |
| Example Color | ![#383838](terminal-background)                |
| Example Color | ![#1bd459](background-animation colour)        |
| Example Color | ![#00d1a0](background-colour)                  |
| Example Color | ![#14fdce](body/ animation- background-colour) |
| Example Color | ![#0c7b46](text-shadow)                        |
| Example Color | ![#]()                                         |
| Example Color | ![#]()                                         |

## Animation styles

- animations give a green hue to terminal screen
- line style gives old style screen line appearance to text
- animation hue gives article element link a hover over green hue

## Roadmap

- Have created a RandomBlog component

- Component will render in random "Fallout" log entries on terminal

- Log entries will be located in a JSON file to be called on as a state to render a random log entry on the page

**Next Steps**

- Create a state for Log Entries

- Create a button component for calling a re-render

- Install dynamic rendering feature to enable a transition effect when calling a new random log entry, and triggering App.js to re-render

**Future Development**

- Integrate CSS styles and animations used in this project in "OOPs mini-game project"
  - using authentication & authorisation to create a mystery game
