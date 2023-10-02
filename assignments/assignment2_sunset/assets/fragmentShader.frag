#version 450
out vec4 FragColor;
out float t;
out float edge;
out float circleRadius;
out float d;
out vec3 col;
out vec2 circlePos;
in vec2 UV;
uniform float _Time;

float circleSDF(vec2 p, float r){
    return length(p)-r;
}

float roundedRectSDF( in vec2 p, in vec2 b, in float r )
{
    vec2 q = abs(p)-b+r;
    return min(max(q.x,q.y),0.0) + length(max(q,0.0)) - r;
}

void main(){

    edge = sin(_Time)*0.5 + 0.5;
    t = smoothstep(edge-0.05,edge+0.05,UV.x);
    FragColor = vec4(t,t,t,1.0);

    circlePos = vec2(cos(_Time),sin(_Time));
    circleRadius = 0.2;
    d = circleSDF(UV - circlePos,circleRadius);


	//FragColor = vec4(UV, 0.0, 1.0); // Original 
    
    /*
    // for some reason it just cant accept when there is more than one command happening and i have no clue how to make this work, also how to implement time?
    // Bottom Mountains
    t = .30 + sin(UV.x*12.56*2)*0.075;
    t = step(t,UV.y);
    */

    /*
    //Sine graph no movement
    float t = sin(UV.x*6.28)*0.5 + 0.5;
    FragColor = vec4(t,t,t,1.0);
    */

    /*
    // Hills preset which works with multiple things????
    //BG gradient
    color = mix(vec3(1.0,1.0,0.0),vec3(0.9,0.0,0.5),UV.y);
    
    //Get 0-1 T value for hill shape
    float hills = 1.0 - step(sin(UV.x*6.0) * 0.2 + 0.3,UV.y);
    
    //Blend dark grey hills
    color = mix(color,vec3(0.2),hills);
    */

    /*
    // Supposedly moving circle (doesnt work)
    circlePos = vec2(cos(iTime),sin(iTime));
    float circleRadius = 0.2;
    float d = circleSDF(UV - circlePos,circleRadius);
    */


    /*
    // Supposedly moving Sine Frag Shader (doesnt work)
    float t = sin(UV.x*6.28+iTime)*0.5 + 0.5;
    FragColor = vec4(t,t,t,1.0);
    */


}
