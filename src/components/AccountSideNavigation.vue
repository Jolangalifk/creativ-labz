<template>
    <nav>
        <ul>
            <li><router-link to="/my-account">Dashboard</router-link></li>
            <li><router-link to="/my-account/orders">Orders</router-link></li>
            <li><router-link to="/my-account/downloads">Downloads</router-link></li>
            <li><router-link to="/my-account/edit-address">Addresses</router-link></li>
            <li><router-link to="/my-account/edit-account">Account details</router-link></li>
            <li>Log out</li>
        </ul>
    </nav>
</template>
<style scoped>
nav {
    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
}

li a {
    text-decoration: none;
}

nav li {
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 185%;
    color: #2ea3f2;
}

nav li::marker {
    color: #666666;
}
</style>