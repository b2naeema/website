
		
		function setActiveStyle (styletitle) {
			var stylelist = document.getElementsByTagName("link");
			for (i = 0; i < stylelist.length; i++) {
				if (isOptionalStylesheet(stylelist[i])) {
					activateWhenMatching(stylelist[i], styletitle);
				}
			}
		}
		
		function isOptionalStylesheet(thislink) {
			return (thislink.getAttribute("rel").indexOf("style") != -1) && thislink.getAttribute("title")
			}
			
		function activateWhenMatching(thislink, styletitle) {
			if (thislink.getAttribute("title") == styletitle) {
				thislink.disabled = false;
			}
			else {
				thislink.disabled = true;
			}
		}
			
	
				
		function chooseStyleBySize() {
			var theWidth = document.documentElement.clientWidth;
			if (theWidth < 800) {
				theSheet = "smallsheet";
			}
			else if (theWidth < 900) {
				theSheet = "mediumsheet";
			}
			else {
				theSheet = "bigsheet";
			}
			setActiveStyle(theSheet);
		}
		


		function setStyleSource (linkID, sourceLoc) {
			var theLink = document.getElementById(linkID);
			theLink.href = sourceLoc;
		}


	

		function chooseSourceBySize() {
			var theWidth = document.documentElement.clientWidth;
			if (theWidth < 800) {
				theSheet = "alternativeCSS3.css";
			}
			else if (theWidth < 900) {
				theSheet = "alternativeCSS2.css";
			}
			else {
				theSheet = "alternativeCSS1.css";
			}
			setStyleSource('changeSheet', theSheet);
		}
	