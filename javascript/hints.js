titles = {
	"Sampling steps": "Określa ile razy iteracyjnie poprawić wygenerowany obraz. Wyższe wartości powodują dłuższe przetwarzanie, zaś bardzo niskie wartości mogą dać złe wyniki",
	"Sampling method": "Określa jaki algorytm ma być użyty do stworzenia obrazu",
	"GFPGAN": "Przywróć niskiej jakości twarze za pomocą sieci neuronowej GFPGAN.",
	"Euler a": "Euler Ancestral - bardzo kreatywny. Każdy może uzyskać zupełnie inny obraz w zależności od liczby iteracji. (Ustawienie na wyższe niż 30-40 nie pomaga)",
	"DDIM": "Denoising Diffusion Implicit Models - najlepszy w inpaintingu",

	"Batch count": "Określa, ile osobnych obrazów wygenerować",
	"Batch size": "Określa, ile obrazów ma być zawartych w jednym",
	"CFG Scale": "Skala \"Classifier Free Guidance\" - jak mocno obraz powinien być zgodny z promptem. Niższe wartości dają bardziej kreatywne rezultaty",
	"Seed": "Wartość określająca wynik generatora liczb losowych - jeśli utworzysz obraz z identycznym ziarnem i parametrami jak inny obraz (na tym samym załadowanym modelu), otrzymasz taki sam wynik",
	"\u{1f3b2}\ufe0f": "Ustaw ziarno na -1 (losowe)",
	"\u267b\ufe0f": "Użyj ziarna z ostatniej generacji. Głównie przydatne, jeśli wcześniej było losowe",
	"\u{1f3a8}": "Dodaj losowego artystę wizualnego do promptu.",
	"\u2199\ufe0f": "Wczytaj do interfejsu użytkownika parametry generacji z promptu lub ostatniej generacji, jeśli podpowiedź jest pusta.",
	"\u{1f4c2}": "Otwórz katalog wyjściowy obrazów w eksploratorze plików",
	"\u{1f4be}": "Zapisz styl",
	"\u{1f4cb}": "Zastosuj wybrane style do bieżącego promptu.",

	"Inpaint a part of image": "Narysuj maskę na obrazie, a skrypt zamieni zamaskowany obszar z zawartością w prompcie",
	"SD upscale": "Upscale image normally, split result into tiles, improve each tile using img2img, merge whole image back",

	"Just resize": "Zmień rozmiar obrazu do rozdzielczości docelowej. Jeśli wysokość i szerokość nie będą się zgadzać, otrzymasz obraz z nieprawidłowymi proporcjami.",
	"Crop and resize": "Zmień rozmiar obrazu tak, aby cała rozdzielczość docelowa była wypełniona obrazem oraz przytnij wystające części.",
	"Resize and fill": "Zmień rozmiar obrazu tak, aby cały obraz znajdował się wewnątrz rozdzielczości docelowej i wypełnij puste miejsca jego kolorami.",

	"Mask blur": "Jak bardzo rozmyć maskę przed przetwarzaniem, w pikselach.",
	"Masked content": "Co umieścić wewnątrz zamaskowanego obszaru przed przetworzeniem go za pomocą Stable Diffusion.",
	"fill": "Wypełnij go kolorami pierwotnego obrazu",
	"original": "Zachowaj to, co było tam pierwotnie",
	"latent noise": "Wypełnij szumem przestrzeni latent",
	"latent nothing": "Wypełnij zerami przestrzeni latent",
	"Inpaint at full resolution": "Wyskaluj zamaskowany region do rozmiaru docelowego, wykonaj inpainting, obniż skalę z powrotem a na koniec wklej do oryginalnego obrazu",

	"Denoising strength": "Określa jak niewiele algorytm powinien mieć czułości dla zawartości obrazu. Przy wartości 0 nic się nie zmieni, a przy 1 otrzymasz niepowiązany obraz. Przy wartościach poniżej 1.0 przetwarzanie zajmie mniej iteracji niż określa to suwak ilości iteracji.",
	"Denoising strength change factor": "W trybie loopback, przy każdej pętli siła odszumiania jest mnożona przez tę wartość. 0 oznacza zmniejszenie różnorodności - sekwencja będzie zbiegać się do stałego obrazu. 1 oznacza zwiększanie różnorodności, więc sekwencja będzie coraz bardziej chaotyczna.",

	"Skip": "Zatrzymaj generowanie bieżącego obrazu, kontynuuj.",
	"Interrupt": "Zatrzymaj generowanie obrazów i wyświetl wszystkie stworzone do tej pory.",
	"Save": "Zapisz obraz do katalogu. (domyślnie - \"log/images\") i parametry generacji do pliku CSV.",

	"X values": "Oddziel wartości dla osi X za pomocą przecinków.",
	"Y values": "Oddziel wartości dla osi Y za pomocą przecinków.",

	"None": "Nie rób nic.",
	"Prompt matrix": "Oddziel prompty w części za pomocą znaku kreski pionowej (|) a skrypt wygeneruje obraz dla każdej kombinacji (z wyjątkiem pierwszej, która będzie widoczna we wszystkich)",
	"X/Y plot": "Create a grid where images will have different parameters. Use inputs below to specify which parameters will be shared by columns and rows",
	"Custom code": "Zastosuj kod Python. Tylko dla zaawansowanych. Trzeba uruchomić z flagą \"--allow-code\", aby zadziałało",

	"Prompt S/R": " Oddziel listę słów przecinkami, a pierwsze słowo zostanie użyte jako słowo kluczowe: skrypt będzie go szukał w prompcie i zastępował innymi",
	"Prompt order": "Oddziel listę słów przecinkami, a skrypt wykona wariant promptu z tymi słowami w każdej możliwej kolejności",

	"Tiling": "Wytwórz obraz, który może być wykafelkowany.",
	"Tile overlap": "Jak duże powinno być nakładanie się pikseli pomiędzy płytkami w przypadku skalowania SD. Kafle powinny zachodzić na siebie tak, aby po połączeniu nie było wyraźnie widocznych linii.",

	"Variation seed": "Ziarno innego obrazu, który ma być wymieszany z generacją.",
	"Variation strength": "Jak silne ma być zróżnicowanie. Na 0 nie powoduje żadnego efektu. Na 1 zaś otrzymasz kompletny obraz z ziarnem zróżnicowanym (z wyjątkiem ancestralnych samplerów, gdzie po prostu coś otrzymasz).",
	"Resize seed from height": "Spróbuj wyprodukować obraz podobny do tego, który zostałby wygenerowany z tego samego ziarna, przy określonej rozdzielczości",
	"Resize seed from width": "Spróbuj wyprodukować obraz podobny do tego, który zostałby wygenerowany z tego samego ziarna, przy określonej rozdzielczości",

	"Interrogate": "Zrekonstruuj prompt z istniejącego obrazka i umieść go w zwykłym polu prompt.",

	"Images filename pattern": "Użyj następujących znaczników, aby określić jak wybrane mają być nazwy plików dla obrazów: [steps], [cfg], [prompt], [prompt_no_styles], [prompt_spaces], [width], [height], [styles], [sampler], [seed], [model_hash], [prompt_words], [date], [datetime], [datetime<Format>], [datetime<Format><Time Zone>], [job_timestamp]; Pozostaw puste dla wartości domyślnych.",
	"Directory name pattern": "Użyj następujących znaczników, aby określić jak wybrane mają być podkatalogi dla obrazów i siatek: [steps], [cfg], [prompt], [prompt_no_styles], [prompt_spaces], [width], [height], [styles], [sampler], [seed], [model_hash], [prompt_words], [date], [datetime], [datetime<Format>], [datetime<Format><Time Zone>], [job_timestamp]; Pozostaw puste dla wartości domyślnych.",
	"Max prompt words": "Ustawienie maksymalnej liczby słów, które będą używane w opcji [prompt_words]; UWAGA: Jeśli słowa będą zbyt długie, mogą przekroczyć maksymalną długość ścieżki do pliku obsługiwaną przez system",

	"Loopback": "Wygeneruj obraz, użyj go jako pliku wejściowego, powtórz.",
	"Loops": "Ile razy należy powtórzyć przetwarzanie obrazu i użyć go jako pliku wejściowego do następnej iteracji",

	"Style 1": "Styl do zastosowania. Mają komponenty zarówno dla pozytywnych, jak i negatywnych promptów.",
	"Style 2": "Styl do zastosowania. Mają komponenty zarówno dla pozytywnych, jak i negatywnych promptów.",
	"Apply style": "Wstaw wartości ze stylów do promptów",
	"Create style": "Zapisz bieżące prompty jako styl. Jeśli dodasz token {prompt} do tekstu, styl użyje tego jako placeholder dla twojej podpowiedzi, gdy użyjesz stylu w przyszłości.",

	"Checkpoint name": "Wczytuje modele z punktu kontrolnego przed wykonaniem obrazów. Możesz użyć hasha lub części nazwy pliku jako nazwy punktu kontrolnego. Zalecane użycie z osią Y dla mniejszej ilości modyfikacji.",
	"Inpainting conditioning mask strength": "Dotyczy tylko modeli inpainting! Określa jak mocno maskować oryginalny obraz dla inpaintingu oraz img2img. 1.0 oznacza pełne zamaskowanie, co jest wartością domyślnym. 0.0 oznacza w pełni zamaskowane kondycjonowanie. Niższe wartości pomogają zachować ogólną kompozycję obrazu, ale będą zmagać się z dużymi zmianami.",

	"vram": "Torch active: Szczytowa ilość VRAM używana przez Torch podczas generowania, z wyłączeniem danych buforowanych. Torch reserved: Szczytowa ilość pamięci VRAM przydzielonej przez Torch, w tym wszystkie aktywne i buforowane dane.  VRAM: Szczytowa ilość alokacji VRAM / VRAM GPU przez wszystkie aplikacje.",

	"Highres. fix": "Stwórz obraz w mniejszej rozdzielczości, powiększ go, a następnie popraw szczegóły bez zmiany kompozycji",
	"Scale latent": "Przeskaluj obraz w przestrzeni latentnej. Alternatywą jest wytworzenie pełnego obrazu z reprezentacji latentnej, powiększenie go, a następnie przeniesienie z powrotem do przestrzeni latentnej.",

	"Eta noise seed delta": "Jeśli ta wartość jest niezerowa, zostanie dodana do nasion i użyta do inicjalizacji generatora liczb losowych dla szumów, podczas użycia samplerów z Eta. Możesz użyć tego do stworzenia jeszcze bardziej zróżnicowanych obrazów, lub możesz do dopasowania obrazów z innego oprogramowania, jeśli wiesz co robisz.",
	"Do not add watermark to images": "Jeśli ta opcja jest włączona, znak wodny nie będzie dodawany do tworzonych obrazów.",

	"Filename word regex": "To wyrażenie regularne zostanie użyte do wyodrębnienia słów z nazwy pliku i zostaną one połączone przy użyciu poniższej opcji w tekst etykiety używany do treningu. Pozostaw puste, aby zachować tekst nazwy pliku takim, jakim jest.",
	"Filename join string": "Ten łańcuch znaków zostanie użyty do połączenia rozdzielonych słów w jedną linię, jeśli włączona jest opcja powyżej.",

	"Quicksettings list": "Lista nazw ustawień oddzielonych przecinkami dla ustawień, które powinny trafić do paska szybkiego dostępu na górze, zamiast do zwykłej karty ustawień. Zobacz \"modules/shared.py\" dla nazw ustawień. Zastosowanie wymaga ponownego uruchomienia.",

	"Weighted sum": "Wynik = A * (1 - M) + B * M",
	"Add difference": "Wynik = A + (B - C) * M",

	"Learning rate": "Jak szybko powinien przebiegać trening. Im więcej wartości, tym dłuższy trening. Wysokie wartości mogą nie generować dokładnych wyników i/lub mogą uszkodzić embedding. (To się stało, jeśli widzisz Loss: nan w polu tekstowym informacji o treningu. Jeśli tak się stanie, musisz ręcznie przywrócić osadzenie ze starszej, nieuszkodzonej kopii zapasowej). Możesz ustawić pojedynczą wartość liczbową lub wiele szybkości uczenia się, używając składni:  rate_1:max_steps_1, rate_2:max_steps_2, ... Np.: 0.005:100, 1e-3:1000, 1e-5\nBędzie trenować z szybkością 0.005 dla pierwszych 100 kroków, następnie 1e-3 do 1000 kroków, a następnie 1e-5 dla wszystkich pozostałych kroków.",
}

/*---*/

onUiUpdate(function() {
	gradioApp().querySelectorAll("span, button, select, p").forEach(function(span) {
		tooltip = titles[span.textContent];

		if (!tooltip) {
			tooltip = titles[span.value];
		}

		if (!tooltip) {
			for (const c of span.classList) {
				if (c in titles) {
					tooltip = titles[c];
					break;
				}
			}
		}

		if (tooltip) {
			span.title = tooltip;
		}
	})

	gradioApp().querySelectorAll("select").forEach(function(select) {
		if (select.onchange != null) return;

		select.onchange = function() {
			select.title = titles[select.value] || "";
		}
	})
})
