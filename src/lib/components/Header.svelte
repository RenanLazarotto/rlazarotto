<script lang="ts">
    import Link from "./Link.svelte";
    import Container from "./Container.svelte";
</script>

<div id="headerArea">
    <div id="header" style="height: 130px;"></div>
    <nav id="navbar" style="margin-bottom: 0px;">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
        </ul>
    </nav>
</div>

<style>
        #header {
        width: 100%;
        background-color: #5e4e8c;
        /* header color here! */
        height: 150px;
        /* this is only for a background image! */
        /* if you want to put images IN the header, 
you can add them directly to the <div id="header"></div> element! */
        background-image: var(--header-image);
        background-size: 100%;
    }

    /* navigation section!! */
    #navbar {
        height: 40px;
        background-color: #13092d;
        /* navbar color */
        width: 100%;
    }

    #navbar ul {
        display: flex;
        padding: 0;
        margin: 0;
        list-style-type: none;
        justify-content: space-evenly;
    }

    #navbar li {
        padding-top: 10px;
    }
</style>