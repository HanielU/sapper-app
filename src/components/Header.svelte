<script>
  import { store } from "./store.js";
  export let title = "";

  let open, width;
  store.subscribe((value) => {
    open = value.open;
    width = value.width;
  });
  const toggleNav = () => store.set({ open: !open, width });
</script>

<style lang="scss">
  header {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    background: inherit;
    justify-content: space-between;
    z-index: 3;

    .title {
      margin: 0 30px;
    }

    .name {
      font-weight: 400;
      font-size: var(--font-size-smaller);
    }
  }

  .small-screen-title {
    display: none;
  }

  .menu-btn {
    margin: 0 25px;
    padding: 20px 10px;
    display: none;

    // gets rid of annoying blue highlight color when clicked on mobile view
    -webkit-tap-highlight-color: transparent;

    &__burger {
      width: var(--qs-icon-regular);
      height: 2px;
      background: var(--font-color);
      border-radius: 5px;
      transition: all 0.5s ease-in-out;

      &::before,
      &::after {
        content: "";
        position: absolute;
        width: inherit;
        height: inherit;
        background: var(--font-color);
        border-radius: 5px;
        transition: all 0.45s ease-in-out;
      }
      &::before {
        transform: translateY(-7px);
      }
      &::after {
        transform: translateY(7px);
      }
    }

    &.open &__burger {
      background: transparent;
      transition: all 0.045s ease-in-out;

      &::before {
        transform: rotate(45deg);
      }
      &::after {
        transform: rotate(-45deg);
      }
    }
  }

  @media screen and (max-width: 1280px) {
    .name {
      margin: 0 30px 0 0;
    }
  }

  @media screen and (max-width: 1124px) {
    .menu-btn {
      display: block;
      cursor: pointer;
    }

    header .title {
      margin: 0 20px 0 auto;
      padding: 0 20px 0 0;
      border-right: 1px solid var(--font-color);
    }
  }

  @media screen and (max-width: 728px) {
    header {
      border-bottom: 1px solid rgba(83, 89, 104, 0.1);
    }

    .title,
    .name {
      display: none;
    }

    .name {
      display: block;
      text-align: right;
    }

    .small-screen-title {
      display: block;
      text-align: center;
      padding: 10px;
      margin: 20px 20px;
      font-size: var(--font-size-big);
    }
  }
</style>

<header>
  <div class="menu-btn" class:open on:click={toggleNav}>
    <div class="menu-btn__burger" />
  </div>
  <h3 class="title">{title}</h3>
  <h3 class="name">HANIEL EFE-TOBORE UBOGU</h3>
</header>

<h3 class="small-screen-title">{title}</h3>
