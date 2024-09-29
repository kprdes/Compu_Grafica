var createScene = function () {
    var scene = new BABYLON.Scene(engine);

    var camera = new BABYLON.ArcRotateCamera("camera", Math.PI / 2, Math.PI / 4, 40, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);

    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0), scene);
    BABYLON.SceneLoader.ImportMesh(
        "", 
        "https://raw.githubusercontent.com/kprdes/Compu_Grafica/main/", 
        "stone_ground_01.glb", 
        scene,
        function (newMeshes) {
            newMeshes.forEach(mesh => {
                mesh.position = BABYLON.Vector3.Zero(); 
                console.log("Piso cargado correctamente.");
                mesh.scaling = new BABYLON.Vector3(2,2,2);
                mesh.position = new BABYLON.Vector3(0, 3.2, 0);
            });
        },
        null,
        null
    );


    BABYLON.SceneLoader.ImportMesh(
        "", 
        "https://raw.githubusercontent.com/kprdes/Compu_Grafica/main/", 
        "Door.obj", 
        scene,
        function (newMeshes) {
            newMeshes.forEach(mesh => {
                mesh.position = new BABYLON.Vector3(5, 0, -8); 
                mesh.rotation = new BABYLON.Vector3(0, Math.PI /4, 0);
                mesh.scaling = new BABYLON.Vector3(3, 3, 3);
                console.log("Puerta cargada correctamente.");
            });
        },
        null,
        null
    );

    BABYLON.SceneLoader.ImportMesh(
        "", 
        "https://raw.githubusercontent.com/kprdes/Compu_Grafica/main/", 
        "at_arabasi.obj", 
        scene,
        function (newMeshes) {
            newMeshes.forEach(mesh => {
                mesh.position = new BABYLON.Vector3(0, 3, 10); 
                console.log("Carretilla cargada correctamente.");
                
                // Crear un cubo sobre la carretilla
                var cube = BABYLON.MeshBuilder.CreateBox("cube", { size: 2 }, scene);
                cube.position = new BABYLON.Vector3(0, 8, 10); 
                var cube = BABYLON.MeshBuilder.CreateBox("cube", { size: 2 }, scene);
                cube.position = new BABYLON.Vector3(2.4, 8, 10); 
                var cube = BABYLON.MeshBuilder.CreateBox("cube", { size: 2 }, scene);
                cube.position = new BABYLON.Vector3(2, 8, 13); 
            });
        },
        null,
        null
    );

    return scene;
};


var canvas = document.getElementById("renderCanvas");


var engine = new BABYLON.Engine(canvas, true);


var scene = createScene();


engine.runRenderLoop(function () {
    scene.render();
});


window.addEventListener("resize", function () {
    engine.resize();
});
