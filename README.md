

# WhatsApp

<!-- <p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p> -->

This project is a (frontend) replica of [WhatsApp (Web)](https://web.whatsapp.com)

- [WhatsApp](#whatsapp)
  - [Why](#why)
  - [Technology Stack](#technology-stack)
    - [In used](#in-used)
    - [Want to use](#want-to-use)
  - [Functionalities](#functionalities)
    - [UI](#ui)
  - [Quick Start](#quick-start)
    - [Requirements](#requirements)
    - [Installation](#installation)
    - [Development server](#development-server)
    - [Build](#build)
  - [TODOs](#todos)
  - [Dokumentation](#dokumentation)
  - [Legal](#legal)

## Why

I rebuild WhatsApp Web as a challenge and to keep up to date with current technologies. 

## Technology Stack

### In used
- [Nx](https://nx.dev) 
- [Firebase](https://firebase.google.com)
- [Angular](https://angular.io)
- [Tailwind](https://tailwindcss.com/docs/transition-duration)
- [cypress](https://www.cypress.io/)
- [jest](https://jestjs.io/)


### Want to use
- [Storybook](https://storybook.js.org)
- [Swagger](https://swagger.io)
- [CompoDoc](https://compodoc.app)
- [Bit](https://bit.dev/)
- [RxJs](https://www.learnrxjs.io/)
- [NgMocks](https://ng-mocks.sudo.eu)
- [BigHeads](https://github.com/RobertBroersma/bigheads)
- [faker.js](https://github.com/marak/Faker.js)



## Functionalities 

### UI
- [x] Responsive
- [ ] Translation
- [ ] Loading page
- [ ] Logged out
- [ ] Own profile bar with
  - [x] Profile picture
  - [x] Name
  - [x] Status button
  - [x] New message button
  - [ ] Settings
    - [x] Button
    - [ ] Context menu
- [x] Chats with
  - [x] Search bar 
  - [x] Profile picture 
  - [x] Name
  - [x] Last message
  - [x] Last message time
  - [ ] Context menu
  - [x] Scrollable
- [ ] Without selected chat
- [ ] Chat with
  - [x] Partner with
    - [x] Profile picture 
    - [x] Name
    - [x] Last online state
    - [ ] Search BuTTON
    - [ ] Settings
      - [ ] Button
      - [ ] ContextMenu
  - [ ] Messages
    - [x] Scrollable
    - [x] In different colors
    - [ ] Expandable when truncated 
  - [x] Message bar with
    - [ ] Smileys / gifs / stickers
      - [x] Buttons
      - [ ] Smileys PopUp
      - [ ] Gifs PopUp
      - [ ] Stickers PopUp
    - [x] Media
    - [x] Input box
    - [x] Microphone
- [ ] Sidemenu (right) for
  - [ ] Message search in active Chat
  - [ ] Contact information
- [ ] Sidemenu (left) for
  - [ ] Creating a group
  - [ ] See marked (star) messages
  - [ ] Settings with
    - [ ] Profile picture name and info
      - [ ] Preview
      - [ ] Editable
    - [ ] Notifications
      - [ ] Button
      - [ ] Editable
    - [ ] Privacy
      - [ ] Button
      - [ ] Last online
        - [ ] Preview
        - [ ] Editable
      - [ ] Profile picture
        - [ ] Preview
        - [ ] Editable
      - [ ] Info
        - [ ] Preview
        - [ ] Editable
      - [ ] Read receipt 
      - [ ] Groups
        - [ ] Preview
        - [ ] Editable
      - [ ] Blocked contatcs
        - [ ] Preview
        - [ ] Editable
          - [ ] Button
          - [ ] List 
          - [ ] Pupup
    - [ ] Security
      - [ ] Button
      - [ ] Editable
    - [ ] Design
      - [ ] Button
      - [ ] Editable (PopUp)
    - [ ] Chat beground
      - [ ] Button
      - [ ] Editable
    - [ ] Shortcuts
      - [ ] Button
      - [ ] PopUp
    - [ ] Help
      - [ ] Gif
      - [ ] Additional area
      - [ ] Contact us
        - [ ] Button
        - [ ] PopUp
      - [ ] Terms of Service & Privacy Policies
  - [ ] Status/Stories (of user and other people)

## Quick Start

### Requirements
- [VSCode](https://code.visualstudio.com)
- [Docker](https://www.docker.com)
- [Docker Desktop](https://www.docker.com/products/docker-desktop)
- [DevContains for VS Code](https://code.visualstudio.com/docs/remote/containers) (and its OS requiremnts)

For Windows:
I **suggest** to clone the repo in your WSL (Linux) environment and **not** on your windows file system. Else the hot-reload will not work well (you will have to enable --poll) and it is pretty slow.

### Installation
1. Clone Repo
2. Open VS Code
3. Open workspace/folder in (Dev) Container (first startup needs some time)


### Development server

Run `npm run frontend` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

### Build

Run `npm run ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## TODOs

- [ ] Create Docker container with nginx server
- [ ] Build backend with firebase
- [ ] Connect to backend
- [ ] Move Code into components

## Dokumentation

Wil be added...

## Legal
This code is in no way affiliated with, authorized, maintained, sponsored or endorsed by WhatsApp or any of its affiliates or subsidiaries. This is an independent and unofficial software. Use at your own risk.