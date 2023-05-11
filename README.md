# AlvasNiraamaya
Major Project:
AlvasNiraamaya is a React Native mobile application for an ayurvedic hospital. It is designed to help patients book appointments, receive reminders, and access information about the hospital and its services.

## Installation

To install and use React Native application, follow these steps:

1. Install Node.js
React Native requires Node.js and the npm package manager. You can download and install Node.js from the official website: https://nodejs.org/en/

2. To install the Niraamaya app, clone the repository and install the dependencies:

```bash

git clone https://github.com/AneshSM/AlvasNiraamaya.git

cd AlvasNiraamaya

npm install

```

This will create a new project folder called "AlvasNiraamaya" with the all files and folder structure required for a React Native Niraamaya app.

## Usage
1. Start Metro development server 
```
npx react-native start
```
This will start the server in a new terminal window. Keep this window open while you're developing your app, as the server needs to be running in order to serve the app's code to the device or simulator.

If you're running the app on an Android device or emulator, you may also need to start the ADB server by running the following command in a separate terminal window:
```
adb start-server
```
This will start the ADB server, which is used to communicate with Android devices and emulators. Make sure the device or emulator is connected and visible to ADB before running the app.

2. Run the app on a device or simulator
To run the app on an iOS simulator, run the following command from the project folder:

```
react-native run-ios
```

To run the app on an Android emulator or device, run the following command:

```
react-native run-android
```

This will build and launch the app on the selected device or simulator.

3. Make changes to the app
Open the project folder in your favorite code editor and start making changes to the files in the "src" folder. You can also add new files and components as needed.

4. Test the app
After making changes to the app, you can test it by reloading the app on the device or simulator. To reload the app, press "Ctrl+R" on the simulator or shake your device and select "Reload" from the menu.

That's it! You now have a React Native Niraamaya app up and running. From here, you can continue to develop app by adding more functionality, styling the app, and testing on different devices and platforms.

Before running the app, you need to have Node.js and npm installed on your computer. You also need to have the React CLI installed globally. If you don't have them installed, you can follow the instructions on the Node.js and React native websites to download and install them.

## Folder Structure

The project is organized into the following folders:

- `src>assets`: Contains the images and other assets used by the app.

- `src>components`: Contains the reusable UI components used by the app.

- `src>global>Navigation`: Contains the navigation configuration and screens used by the app.

- `src>screens`: Contains the individual screens used by the app.

- `src>context`: Contains the all application context files that are used across multiple pages.

## Contributers
- `@ksheerashetty`: ksheerashetty@gmail.com 
- `Saqibrz`: muhammad24saqib@gmail.com
- `ganavi882`: ganavi921@gmail.com

## Contact Information

If you have any questions or comments about the project, you can contact the project maintainer at aneshsm204@gmail.com.

## Links

- [AlvasNiraamaya Repository](https://github.com/AneshSM/AlvasNiraamaya)

- [React Native CLI](https://reactnative.dev/docs/environment-setup) 

- [Node.js](https://nodejs.org/en/) 
