

# WhatsApp

<!-- <p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p> -->

This project is a (frontend) replica of [WhatsApp (Web)](https://web.whatsapp.com)
The chat functionality will be implemented with Firebase and does not work with WhatsApp.

- [WhatsApp](#whatsapp)
  - [Why](#why)
  - [Technology Stack](#technology-stack)
    - [In used](#in-used)
    - [Want to use](#want-to-use)
  - [Functionalities](#functionalities)
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
- [Storybook](https://storybook.js.org) (+[CompoDoc](https://compodoc.app))


### Want to use
- [Swagger](https://swagger.io)
- [Bit](https://bit.dev/)
- [RxJs](https://www.learnrxjs.io/)
- [cypress](https://www.cypress.io/)
- [jest](https://jestjs.io/) (+ [NgMocks](https://ng-mocks.sudo.eu))
- [faker.js](https://github.com/marak/Faker.js) & [BigHeads](https://github.com/RobertBroersma/bigheads)



## Functionalities 

<details>
  <summary>UI</summary>
  
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
  - [ ] Circle for new message nr 
- [x] Empty Chat (Hidden partner, chat & message bar)
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
</details>

<details>
  <summary>Backend</summary>
  
- [ ] Create new chat with person / group
- [ ] Get message from chat with person / group
- [ ] Save messages to chat with person / group
- [ ] Get message read status (send, received, read)
- [ ] Get persons last status
- [ ] Get all contacts
- [ ] Get profile information for contact
- [ ] Get group information for group
- [ ] Get blocked contacts
- [ ] Add contact
- [ ] Block contact
- [ ] Create Story
- [ ] Get all stories
</details>

## Quick Start

### Requirements
If you want to run it in a DevContainer:
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
- [ ] Oath Login for Github/Google/Etc.

## Dokumentation

Wil be added...

<kbd>ESC</kbd>

> Quote

:tada: 🦖

<details>
  <summary>UI</summary>
  Test
  
- [x] one
- [ ] two

</details>

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |

| Left-aligned | Center-aligned | Right-aligned |
| :---         |     :---:      |          ---: |
| git status   | git status     | git status    |
| git diff     | git diff       | git diff      |

<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>


## Legal
This code is in no way affiliated with, authorized, maintained, sponsored or endorsed by WhatsApp or any of its affiliates or subsidiaries. This is an independent and unofficial software. Use at your own risk.