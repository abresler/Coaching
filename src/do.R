## Ryan Elmore
## Date:
## Description:

.project.path <- "/Users/relmore/Side_Projects/Sports/NBA/Coaching/"

## Dependencies:
source(paste(.project.path, "src/load.R", sep=""))

full.url <- "../html/gameDetail.html"
doc <- htmlTreeParse(full.url, useInternalNodes=T)
tables <- readHTMLTable(doc)

for(i in 92:95){
  report <- tables[[i]]
}



