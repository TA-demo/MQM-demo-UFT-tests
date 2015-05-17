Dim fso, file, file_location, data, myrandom, newData, result

file_location = "c:\envtesthack.txt"
Set fso = CreateObject("Scripting.FileSystemObject")

if not fso.FileExists(file_location) Then
	Reporter.ReportEvent micPass, "Test succeeded", "We did it even without file!"
Else
	Set file= fso.OpenTextFile(file_location, 1, true)
	data = file.ReadLine
	If data="true" Then
		Reporter.ReportEvent micFail, "HA_SETUP failure", "HA SETUP is not supported yet"
	Else
		Reporter.ReportEvent micPass, "Test succeeded", "We did it!"
	End If
End If

