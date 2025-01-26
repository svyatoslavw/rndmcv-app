# Table of content

- [guidelines](#guidelines)
- [Skills needed to contribute](#-prerequisite-skills-to-contribute)
- [How to contribute](#-how-to-contribute)

## Guidelines

### Issues guidelines

- Don't work on anything unless you are assigned, if you make a pull request without being assigned to that issue, it will be closed without being merged
- Don't work on more than one issue at a time, this is so that you don't make a huge pull request and others can have opportunities to work on another issue while you work on something else

### Pull Request guidelines

- Don't create a pull request on an issue that doesn't exist, create an issue first and if the changes you are proposing are said to be okay, you can go ahead and create a pull request
- Don't work on the main branch, create your own branch by following the instructions [here](#-how-to-make-a-pull-request)
- Don't create a PR for things outside of your issue's scope, it will lead to more work for the maintainers

### General guidelines

- Do read the `readme.md` file
- If there's no PR for an issue in the allocated time, you will be unassigned, the following labels determine the time. `2 days`, `4 days`, `7 days`

#### 👌🏾 How to fill a pull request template(Text)

- Your Pull Request title should be like a commit message which should look like this -> `[prefix]: [what you did]`
[how to write what you did](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/)
[how to pick which prefix to use](https://kapeli.com/cheat_sheets/Conventional_Commits.docset/Contents/Resources/Documents/index)

- Your PR description should have either `fixes`, `closes` with the issue number you worked on, for example, `fixes #123` or `closes #123` where #123 is the issue you worked on. It should not be `fixes issue #123`
- Your PR description should also have the changes you did e.g added a new component, added a new image.

## 👩🏽‍💻 Prerequisite Skills to Contribute

### Contribute in Components/CSS

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)

### Contribute in backend

- [Node.js](https://nodejs.org/)
- [Prisma](https://www.prisma.io/)

---

## 💥 How to Contribute

- Take a look at the existing [Issues](https://github.com/svyatoslavw/rndmcv-app/issues) or [create a new issue](https://github.com/svyatoslavw/rndmcv-app/issues/new/choose)!
- [Fork the Repo](https://github.com/svyatoslavw/rndmcv-app/fork). Then, create a branch for any issue that you are working on. Finally, commit your work.
- Create a [Pull Request](https://github.com/svyatoslavw/rndmcv-app/compare) (PR), which will be promptly reviewed and given suggestions for improvements by the community.
- Add screenshots or screen captures to your Pull Request to help us understand the effects of the changes proposed in your PR.

---

## Starting the Project without Docker

1. Navigate to the Folder

  ```bash
  cd rndmcv-app
  ```

2. Install Dependencies

  ```bash
  yarn install
  ```

3. Open Docker Desktop and start the containers

  ```bash
  yarn docker:up
  ```

4. Start the Project

  ```bash
  yarn dev:turbo
  ```

5. Open your browser and go to [localhost:3000](http://localhost:3000)

  > Note: you must have gotten past step 3 in ["Installation"](https://github.com/svyatoslavw/rndmcv-app#%EF%B8%8F-installation) part of the readme file
