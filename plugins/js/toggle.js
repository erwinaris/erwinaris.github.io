


function hyClick() {
    const x = document.createElement("a");
    // x.setAttribute("rel", "stylesheet");
    // x.setAttribute("type", "text/css");
    x.setAttribute("href", "{{ $translation.Permalink | relURL }}");
    document.head.appendChild(x);
}
