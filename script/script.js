window.onload = function(){

    var projects = document.getElementsByClassName("project_container");
    for (let i = 0; i < projects.length; i++) {
        const project = projects[i];
        var title = project.getElementsByClassName("project_title")[0].innerHTML;
        var steps_container = document.getElementsByClassName("project_timeline_steps_container")[0];
        var new_step = document.createElement("div");
        new_step.className = "project_timeline_step";
        // new_step.style.width = (steps_container.clientWidth - 1) / projects.length + "px";
        steps_container.appendChild(new_step)
    }

};