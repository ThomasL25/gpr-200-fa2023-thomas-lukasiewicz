#version 450
out vec4 FragColor;
in vec2 UV;
uniform float _Time;
uniform vec2 iResolution;


float circleSDF(vec2 p, float r){
    return length(p)-r;
}

float roundedRectSDF( in vec2 p, in vec2 b, in float r )
{
    vec2 q = abs(p)-b+r;
    return min(max(q.x,q.y),0.0) + length(max(q,0.0)) - r;
}

void main(){

float aspect = iResolution.x / iResolution.y;

vec2 circlePos = vec2(.8,cos(_Time) -.3);
float circleRadius = 0.4;
float d = circleSDF(UV - circlePos,circleRadius);

float d2 = distance(UV, vec2(0.0,sin(_Time)));
float t2 = smoothstep(1.0,1.0,d);



vec3 color = mix(vec3(1.0,1.0,0.0),vec3(0.9,0.0,0.5),UV.y);
    
//Get 0-1 T value for hill shape
float hills = 1.0 - step(sin(UV.x*6.0) * 0.2 + 0.3,UV.y);
    
//Blend dark grey hills
color = mix(color,vec3(0.2),hills);

vec3 circleBlank = vec3(d, d, d);
//circleBlank = mix(circleBlank, vec3(1.0, 1.0, 0.0), UV.x);

color = mix(color,vec3(0.0) ,circleBlank);
	FragColor = vec4(color, 1.0); // Original 
   
}
