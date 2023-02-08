cmake_minimum_required(VERSION 3.22)

project(Minecraft-cpp)

file(GLOB_RECURSE MCPP_SOURCES source/*.cpp source/*.hpp)

add_executable(mcpp ${MCPP_SOURCES})

# OpenGL

find_package(OpenGL REQUIRED)

if(NOT OPENGL_GLU_FOUND)
    message(FATAL_ERROR No OpenGL GLU!)
endif()

target_link_libraries(mcpp PRIVATE ${OPENGL_LIBRARIES})
target_include_directories(mcpp PRIVATE ${OPENGL_INCLUDE_DIR})

# GLFW3

set(GLFW_BUILD_EXAMPLES OFF)
set(GLFW_BUILD_TESTS OFF)
set(GLFW_BUILD_DOCS OFF)
set(GLFW_INSTALL OFF)

add_subdirectory(glfw)

target_link_libraries(mcpp PRIVATE glfw)
target_include_directories(mcpp PRIVATE glfw/include)

# Glatter

target_include_directories(mcpp PRIVATE glatter/include)