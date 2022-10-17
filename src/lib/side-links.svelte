<script>
    import VerticalLink from "./components/vertical-link.svelte";
</script>

<section>
    <VerticalLink href="https://github.com/RenanLazarotto" target="_blank">
        <slot name="icon">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
                width="16"
                height="16"
            >
                <path
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                />
            </svg>
            <div class="sm:[writing-mode:vertical-rl]">github</div>
        </slot>
    </VerticalLink>

    <VerticalLink
        href="https://www.linkedin.com/in/renanlazarotto/"
        target="_blank"
    >
        <slot name="icon">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
                width="16"
                height="16"
            >
                <path
                    d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                />
            </svg>
            <div class="sm:[writing-mode:vertical-rl]">linkedin</div>
        </slot>
    </VerticalLink>

    <VerticalLink
        href="mailto:renanlazarotto@gmail.com?subject=Contato via site"
    >
        <slot name="icon">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
                width="16"
                height="16"
            >
                <path
                    d="M4 0a2 2 0 0 0-2 2v1.133l-.941.502A2 2 0 0 0 0 5.4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.4a2 2 0 0 0-1.059-1.765L14 3.133V2a2 2 0 0 0-2-2H4Zm10 4.267.47.25A1 1 0 0 1 15 5.4v.817l-1 .6v-2.55Zm-1 3.15-3.75 2.25L8 8.917l-1.25.75L3 7.417V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v5.417Zm-11-.6-1-.6V5.4a1 1 0 0 1 .53-.882L2 4.267v2.55Zm13 .566v5.734l-4.778-2.867L15 7.383Zm-.035 6.88A1 1 0 0 1 14 15H2a1 1 0 0 1-.965-.738L8 10.083l6.965 4.18ZM1 13.116V7.383l4.778 2.867L1 13.117Z"
                />
            </svg>
        </slot>
        <div class="sm:[writing-mode:vertical-rl]">email</div>
    </VerticalLink>

    <div/>
</section>

<style>
    section {
        display: flex;
        column-gap: 0.5rem;
        justify-content: center;
        align-items: center;
    }

    section > div {
        display: none;
    }

    @media (min-width: 640px) {
        section {
            row-gap: 0.5rem;
            column-gap: 0px;
            position: fixed;
            bottom: 0px;
            left: auto;
            right: 1.5rem;
            flex-direction: column;
        }

        section > div {
            display: block;
            width: 1px;
            height: 7rem;
            background-color: rgb(167 139 250);
        }
    }
</style>
