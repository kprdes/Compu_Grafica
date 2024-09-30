var createScene = function () {
    var scene = new BABYLON.Scene(engine);

    var camera = new BABYLON.ArcRotateCamera("camera", Math.PI / 2, Math.PI / 4, 40, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);

    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(10, 10, 10), scene);

    // Cargar el piso
    BABYLON.SceneLoader.ImportMesh(
        "", 
        "https://raw.githubusercontent.com/kprdes/Compu_Grafica/main/", 
        "stone_ground_01.glb", 
        scene,
        function (newMeshes) {
            newMeshes.forEach(mesh => {
                mesh.position = BABYLON.Vector3.Zero(); 
                mesh.scaling = new BABYLON.Vector3(2, 2, 2);
                mesh.position = new BABYLON.Vector3(0, 3.2, 0);

                // textura
                var groundMaterial = new BABYLON.StandardMaterial("groundMat", scene);
                groundMaterial.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/kprdes/Compu_Grafica/main/ground_texture.webp", scene);
                mesh.material = groundMaterial;

                console.log("Piso cargado y textura aplicada.");
            });
        },
        null,
        null
    );

    // Cargar la pared
    BABYLON.SceneLoader.ImportMesh(
        "", 
        "https://raw.githubusercontent.com/kprdes/Compu_Grafica/main/", 
        "wall.obj", 
        scene,
        function (newMeshes) {
            newMeshes.forEach(mesh => {
                mesh.position = new BABYLON.Vector3(5, 0, -23); 
                mesh.rotation = new BABYLON.Vector3(0, -0.5, 0);
                mesh.scaling = new BABYLON.Vector3(10, 10, 10);

                // textura
                var wallMaterial = new BABYLON.StandardMaterial("wallMat", scene);
                wallMaterial.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/kprdes/Compu_Grafica/main/albedo.jpg", scene); 
                mesh.material = wallMaterial;

                console.log("pared cargada y textura aplicada.");
            });
        },
        null,
        null
    );


    // Cargar la puerta
    BABYLON.SceneLoader.ImportMesh(
        "", 
        "https://raw.githubusercontent.com/kprdes/Compu_Grafica/main/", 
        "door.obj", 
        scene,
        function (newMeshes) {
            newMeshes.forEach(mesh => {
                mesh.position = new BABYLON.Vector3(-120, 40, -175);
                mesh.rotation = new BABYLON.Vector3(0, -0.5, 0);
                mesh.scaling = new BABYLON.Vector3(10, 10, 10);

                // textura
                var doorMaterial = new BABYLON.StandardMaterial("doorMat", scene);
                doorMaterial.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/kprdes/Compu_Grafica/main/T_Door_D.png", scene); 
                mesh.material = doorMaterial;

                console.log("puerta cargada y textura aplicada.");
            });
        },
        null,
        null
    );



    // Cargar arbol
    BABYLON.SceneLoader.ImportMesh(
        "", 
        "https://raw.githubusercontent.com/kprdes/Compu_Grafica/main/", 
        "pine.obj", 
        scene,
        function (newMeshes) {
            newMeshes.forEach(mesh => {
                mesh.position = new BABYLON.Vector3(5, 1, 15);
                mesh.rotation = new BABYLON.Vector3(0, 0.1, 0);
                mesh.scaling = new BABYLON.Vector3(2, 2, 2);

                // textura
                var pineMaterial = new BABYLON.StandardMaterial("pineMat", scene);
                pineMaterial.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/kprdes/Compu_Grafica/main/Pine_BaseColor.jpeg", scene);
                mesh.material = pineMaterial;

                console.log("puerta cargada y textura aplicada.");
            });
        },
        null,
        null
    );


    // Cargar mago
    BABYLON.SceneLoader.ImportMesh(
        "", 
        "https://raw.githubusercontent.com/kprdes/Compu_Grafica/main/", 
        "gandalf.obj", 
        scene,
        function (newMeshes) {
            newMeshes.forEach(mesh => {
                mesh.position = new BABYLON.Vector3(-10, 1, -5);
                mesh.rotation = new BABYLON.Vector3(0, -5, 0);
                mesh.scaling = new BABYLON.Vector3(16, 16, 16);

                // textura
                var mageMaterial = new BABYLON.StandardMaterial("mageMat", scene);
                mageMaterial.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/kprdes/Compu_Grafica/main/gray_texture.jpg", scene); 
                mesh.material = mageMaterial;

                console.log("puerta cargada y textura aplicada.");
            });
        },
        null,
        null
    );







    // Cargar la carretilla
    BABYLON.SceneLoader.ImportMesh(
        "", 
        "https://raw.githubusercontent.com/kprdes/Compu_Grafica/main/", 
        "at_arabasi.obj", 
        scene,
        function (newMeshes) {
            newMeshes.forEach(mesh => {
                mesh.position = new BABYLON.Vector3(0, 3, 10);

                // textura
                var cartMaterial = new BABYLON.StandardMaterial("cartMat", scene);
                cartMaterial.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/kprdes/Compu_Grafica/main/textura_carretilla.jpg", scene); // Cambia la ruta a tu textura
                mesh.material = cartMaterial;

                console.log("Carretilla cargada y textura aplicada.");

                // Crear cubos encima de la carretilla
                var cube1 = BABYLON.MeshBuilder.CreateBox("cube1", { size: 2 }, scene);
                cube1.position = new BABYLON.Vector3(0, 8, 10);

                var cube2 = BABYLON.MeshBuilder.CreateBox("cube2", { size: 2 }, scene);
                cube2.position = new BABYLON.Vector3(2.4, 8, 10);

                var cube3 = BABYLON.MeshBuilder.CreateBox("cube3", { size: 2 }, scene);
                cube3.position = new BABYLON.Vector3(2, 8, 13);

                // textura
                var cubeMaterial = new BABYLON.StandardMaterial("cubeMat", scene);
                cubeMaterial.diffuseTexture = new BABYLON.Texture("https://raw.githubusercontent.com/kprdes/Compu_Grafica/main/box_texture.jpg", scene); // Cambia la ruta a tu textura
                cube1.material = cubeMaterial;
                cube2.material = cubeMaterial;
                cube3.material = cubeMaterial;
            });
        },
        null,
        null
    );

    return scene;
};
