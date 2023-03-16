/**
 * Geometria: Construye una geometria THREEJS y la retoma
 * ENTRADAS: vx = Arreglo de vertices(arreglo de arreglos de enteros)
 * SALIDA: geom = Geometria generada a partir de vx
 */
function Geometria(vx){
    geom=new THREE.Geometry();
        var largoVertice = vx.length;
        for (i = 0; i < largoVertice; i++) {
            x = vx[i][0];
            y = vx[i][1];
            z = vx[i][2];
            vector = new THREE.Vector3(x, y, z);
            geom.vertices.push(vector);
        }
        return geom;
    }
    function Traslacion(vt){
        var matrizT = new THREE.Matrix4();
        matrizT.set(1, 0, 0, vt[0],
                0, 1, 0, vt[1],
                0, 0, 1, vt[2],
                0, 0, 0, 1);  
                return matrizT;     
        }
    /**
     * Escalado: Construye la matriz de escalado THREEJS para el vector vs y la retorna
     * ENTRADAS: vs = Vector de escalado (arreglo de enteros)
     * SALIDA: matrizS = Matriz de escalado para le vetor vs
     */
    function Escalado(piramide,vs,posini){
        var matrizS = new THREE.Matrix4();
        tr=[-posini[0],-posini[1],-posini[2]];   //Definir vector para llevar al origen
        piramide.applyMatrix(traslate(tr));      //Aplicacion de matriz para llevar al origen
        matrizS.set(vs[0], 0, 0, 0,
                0, vs[1], 0, 0,
                0, 0, vs[2], 0,
                0, 0, 0, 1);
        piramide.applyMatrix(matrizS);
        tr=[posini[0],posini[1],posini[2]];   //Definir vector para llevar al origen
        piramide.applyMatrix(traslate(tr));      //Aplicacion de matriz para llevar al origen
        return piramide;
    }
    
    function rotarX(angulo){
        var matrizR = new THREE.Matrix4();  //Crear una matriz 4x4
        var alpha = (angulo*Math.PI)/180;   //Transformar a radianes
        var cs = Math.cos(alpha);           
        var ss = Math.sin(alpha);       //Seno y coseno
        matrizR.set(  1,  0,  0, 0,
                    0, cs,-ss, 0, 
                    0, ss, cs, 0,
                    0,  0,  0, 1);  
        return MatrizR;
    
    }
    
    function rotarY(angulo){
        var matrizR = new THREE.Matrix4();  //Crear una matriz 4x4
        var alpha = (angulo*Math.PI)/180;   //Transformar a radianes
        var cs = Math.cos(alpha);           
        var ss = Math.sin(alpha);       //Seno y coseno
        matrizR.set( cs,  0, ss, 0,
            0,  1,  0, 0, 
          -ss,  0, cs, 0,
            0,  0,  0, 1);  
        return MatrizR;
    
    }
    
    function rotarZ(angulo){
        var matrizR = new THREE.Matrix4();  //Crear una matriz 4x4
        var alpha = (angulo*Math.PI)/180;   //Transformar a radianes
        var cs = Math.cos(alpha);           
        var ss = Math.sin(alpha);       //Seno y coseno
        matrizR.set( cs,-ss,  0, 0,
            ss, cs,  0, 0, 
             0,  0,  1, 0,
             0,  0,  0, 1); 
        return MatrizR;
    
    }
    
    function rotarRealX(piramide,angulo, posini){
        tr=[-posini[0],-posini[1],-posini[2]];   //Definir vector para llevar al origen
        piramide.applyMatrix(traslate(tr));      //Aplicacion de matriz para llevar al origen
        var matrizR = new THREE.Matrix4();  //Crear una matriz 4x4
        var alpha = (angulo*Math.PI)/180;   //Transformar a radianes
        var cs = Math.cos(alpha);           
        var ss = Math.sin(alpha);       //Seno y coseno
        matrizR.set(  1,  0,  0, 0,
                    0, cs,-ss, 0, 
                    0, ss, cs, 0,
                    0,  0,  0, 1);  
    
        piramide.applyMatrix(matrizR);
        tr=[posini[0],posini[1],posini[2]];   //Definir vector para llevar al origen
        piramide.applyMatrix(traslate(tr));
        return piramide;
    
    }
    
    function rotarRealY(piramide,angulo, posini){
        tr=[-posini[0],-posini[1],-posini[2]];   //Definir vector para llevar al origen
        piramide.applyMatrix(traslate(tr));      //Aplicacion de matriz para llevar al origen
        var matrizR = new THREE.Matrix4();  //Crear una matriz 4x4
        var alpha = (angulo*Math.PI)/180;   //Transformar a radianes
        var cs = Math.cos(alpha);           
        var ss = Math.sin(alpha);       //Seno y coseno
        matrizR.set( cs,  0, ss, 0,
            0,  1,  0, 0, 
          -ss,  0, cs, 0,
            0,  0,  0, 1);    
        piramide.applyMatrix(matrizR);
        tr=[posini[0],posini[1],posini[2]];   //Definir vector para llevar al origen
        piramide.applyMatrix(traslate(tr));
        return piramide;
    }
    
    function rotarRealZ(piramide,angulo, posini){
        tr=[-posini[0],-posini[1],-posini[2]];   //Definir vector para llevar al origen
        piramide.applyMatrix(traslate(tr));      //Aplicacion de matriz para llevar al origen
        var matrizR = new THREE.Matrix4();  //Crear una matriz 4x4
        var alpha = (angulo*Math.PI)/180;   //Transformar a radianes
        var cs = Math.cos(alpha);           
        var ss = Math.sin(alpha);       //Seno y coseno
        matrizR.set( cs,-ss,  0, 0,
            ss, cs,  0, 0, 
             0,  0,  1, 0,
             0,  0,  0, 1);    
        piramide.applyMatrix(matrizR);
        tr=[posini[0],posini[1],posini[2]];   //Definir vector para llevar al origen
        piramide.applyMatrix(traslate(tr));
        return piramide;
    
    }