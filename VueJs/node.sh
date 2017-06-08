#!/bin/bash
docker run -it  -p 8888:80 --rm -v $(pwd)/src:/src/app node /bin/bash