(function () {
    var projects = document.getElementsByClassName("project_container");

    for (let i = 0; i < projects.length; i++) {
        const project = projects[i];
        var image_container = project.getElementsByClassName("project_images").length == 0 ? undefined : project.getElementsByClassName("project_images")[0];

        if (image_container) {
            const image_view = image_container.getElementsByClassName("image_view")[0];
            const image_fullscreen = image_view.getElementsByClassName("full_screen")[0];
            const image_open = image_view.getElementsByClassName("open")[0];
            image_view.style.height = "225px";

            if (image_open) {
                image_open.onclick = function () {
                    var url = image_view.style.backgroundImage.substr(5).replace('")', '');
                    var win = window.open(url, '_blank');
                    // win.focus();
                }
            }
            if (image_fullscreen) {
                image_fullscreen.onclick = function () {
                    if (image_view.style.height == "225px") {
                        image_view.style.height = "550px";
                        image_fullscreen.className = "scale_down";
                    } else {
                        image_view.style.height = "225px";
                        image_fullscreen.className = "full_screen";
                    }
                }
            }
            const image_list = image_container.getElementsByClassName("image_list").length == 0 ? undefined : image_container.getElementsByClassName("image_list")[0];

            if (image_list) {
                const images = image_list.getElementsByTagName("img");

                if (images.length == 0) {
                }
                else {
                    for (let b = 0; b < images.length; b++) {
                        const image = images[b];
                        if (image.className == "selected") {
                            image_view.style.backgroundImage = 'url("' + image.src + '")';
                        }
                        image.onclick = function () {
                            for (let c = 0; c < images.length; c++) { images[c].className = ""; }
                            image_view.style.backgroundImage = 'url("' + image.src + '")';
                            image.className = "selected";
                        }
                    }

                    if (images.length == 1) {
                        image_list.style.display = "none";
                    }
                }
            }
        }
    }
})()

window.onload = function () {

    //     // var title = project.getElementsByClassName("project_title")[0].innerHTML;
    //     // var steps_container = document.getElementsByClassName("project_timeline_steps_container")[0];
    //     // var new_step = document.createElement("div");
    //     // new_step.className = "project_timeline_step";
    //     // // new_step.style.width = (steps_container.clientWidth - 1) / projects.length + "px";
    //     // steps_container.appendChild(new_step)
    // }

};