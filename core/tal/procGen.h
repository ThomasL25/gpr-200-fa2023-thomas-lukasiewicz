#pragma once
#include "../ew/mesh.h"

struct Vertex {
	ew::Vec3 pos;
	ew::Vec3 normal;
	ew::Vec2 uv;
};

struct MeshData {
	std::vector<Vertex> vertices;
	std::vector<unsigned int> indices;
};

namespace tal {
	ew::MeshData createSphere(float radius, int numSegments);
	ew::MeshData createCylinder(float height, float radius, int numSegmenets);
	ew::MeshData createPlane(float width, float height, int subdivisions);
	}