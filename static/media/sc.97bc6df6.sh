for i in $(\ls | grep '(00001)')
do
	mv "$i" "$(echo $i | sed -e 's/(00001)//g')"
	mv "$i" "$(echo $i | sed -e 's/(00002)//g')"
	mv "$i" "$(echo $i | sed -e 's/(00003)//g')"
	mv "$i" "$(echo $i | sed -e 's/(00004)//g')"
done
