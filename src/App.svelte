<script lang="ts">
  import {onMount} from 'svelte'
  import "modern-css-reset"
  import "./app.css";
  //  Cannot bundle correctly with esbuild right now
  //  import pkg from "../public/manifest.json"
</script>

<style>
    :global(body){
        width: 400px;
        height: 400px;
        background-color: var(--base-color);
        margin: 0px;
        display: grid;
        justify-content: center;
        align-items: center;
    }

    a {
       color: var(--highlight-color);
       text-decoration: none;
    }
        
    a:hover {
       color: var(--highlight-color-tint1);
    }

    main{
        padding: 0 var(--lg-space);
    }

    section{
    display: flex;
    align-items: center;
    flex-direction: column;
    color: var(--base-contrast-color);
    margin-bottom: var(--md-space);
    }
        
    footer{
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: var(--md-space);
    color: var(--base-contrast-color);
    }

    .title-heading{
    font-size: var(--lg-font);
    font-family: var(--display-font);
    font-weight: 700;
    color: var(--base-contrast-color);
    margin-bottom: var(--lg-space);
    }

    :global(ul[role="list"]){
        padding: 0;
        margin: 0;
    }

    .nav-list{
        display: grid;
        grid-row-gap: var(--sm-space);
    }

    .nav-item{
        text-align: center;
        font-size: var(--sm-font);
    }

    .remark{
        font-size: var(--sm-font);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .portfolio-link{
        font-weight: 700;
    }
</style>

<main>
    <section>
        <h1 class="title-heading">No Arrow Keys</h1>
        <nav>
            <ul class="nav-list" role="list">
                <!--  <li class="nav-item">  -->
                    <!--  <a class="customize-link" target="_blank" href="chrome://extensions/shortcuts">Customize keybindings</a>  -->
                <!--  </li>  -->
                <li class="nav-item">
                    <a class="customize-link" target="_blank" href="https://github.com/winston0410/no-arrow-keys">Read more about this project in Github</a>
                </li>
            </ul>
        </nav>
    </section>
    <footer>
        <p class="remark">
          <span>This extension is created by</span>
          <a class="portfolio-link" target="_blank" href="https://hugosum.me">Hugo Sum</a>
          <span>a fullstack developer from Hong Kong.<span>
        </p>
    </footer>
</main>
